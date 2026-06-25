"use client";

import { useEffect, useState } from "react";
import { getClientPaymentsAction, payInvoiceAction } from "@/actions/client";
import CountUpNumber from "@/components/ui/CountUpNumber";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { PageHeader } from "@/components/ui/PageHeader";
import { CheckCircle2, Clock, Banknote } from "lucide-react";

export default function PaymentsPage() {
  const [paymentsList, setPaymentsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");
  const [processing, setProcessing] = useState(false);

  const fetchPayments = async () => {
    try {
      const res = await getClientPaymentsAction();
      setPaymentsList(res);
    } catch (err) {
      console.error("Error fetching client payments:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPayments(); }, []);

  const paidCount     = paymentsList.filter((p) => p.status === "Completed").length;
  const pendingCount  = paymentsList.filter((p) => p.status === "Pending").length;
  const lastTx        = paymentsList.length > 0 ? paymentsList[0] : null;

  const handlePayment = async () => {
    if (!selected || processing) return;
    setProcessing(true);
    try {
      const res = await payInvoiceAction(selected.invoice, paymentMethod);
      if (res.ok) { setSelected(null); fetchPayments(); }
    } catch (err) {
      console.error("Error processing payment:", err);
    } finally {
      setProcessing(false);
    }
  };

  const downloadReceipt = (payment: any) => {
    const receiptHTML = `
      <html><head><title>Receipt_${payment.paymentId}</title>
      <style>body{font-family:Arial,sans-serif;padding:40px;color:#333;background:#f8fafc}
      .card{border:1px solid #e2e8f0;padding:30px;border-radius:20px;max-width:500px;margin:auto;background:white;box-shadow:0 4px 6px -1px rgb(0 0 0/.1)}
      h2{color:#0f172a;border-bottom:2px solid #e2e8f0;padding-bottom:12px;margin-top:0}
      p{margin:12px 0;font-size:14px;display:flex;justify-content:space-between}
      .label{color:#64748b;font-weight:500}.val{color:#0f172a;font-weight:600}
      .brand{text-align:center;margin-top:20px;font-size:12px;color:#94a3b8;font-weight:700;letter-spacing:.1em}
      </style></head><body><div class="card">
      <h2>Payment Receipt</h2>
      <p><span class="label">Transaction ID:</span><span class="val">${payment.paymentId}</span></p>
      <p><span class="label">Invoice ID:</span><span class="val">${payment.invoice}</span></p>
      <p><span class="label">Date:</span><span class="val">${payment.date}</span></p>
      <p><span class="label">Amount:</span><span class="val">${payment.amount}</span></p>
      <p><span class="label">Method:</span><span class="val">${payment.method}</span></p>
      <p><span class="label">Status:</span><span class="val">${payment.status}</span></p>
      <div class="brand">SPEEDX INDUSTRY</div></div></body></html>`;
    const blob = new Blob([receiptHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `receipt_${payment.paymentId}.html`;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-sky-600" />
        <p className="text-sm font-medium text-slate-500">Loading payments log...</p>
      </div>
    );
  }

  // Table config
  const tableHeaders = [
    { key: "txId",     label: "Transaction ID" },
    { key: "invoice",  label: "Invoice ID" },
    { key: "amount",   label: "Amount" },
    { key: "method",   label: "Method" },
    { key: "status",   label: "Status" },
  ];

  const tableData = paymentsList.map((p) => ({
    id: p.id,
    txId:    <span className="font-mono font-semibold text-slate-700">{p.paymentId}</span>,
    invoice: <span className="font-mono text-xs text-slate-500">{p.invoice}</span>,
    amount:  <span className="font-semibold text-slate-900">{p.amount}</span>,
    method:  p.method || "Bank Transfer",
    status: (
      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
        p.status === "Completed" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
      }`}>
        {p.status === "Completed" ? "Completed" : "Pending"}
      </span>
    ),
  }));

  const tableButtons = [
    {
      icon: <span className="text-xs">💳</span>,
      text: "Pay Now",
      className: "bg-sky-600 text-white",
      onClick: (row: { id: string }) => {
        const p = paymentsList.find((x) => x.id === row.id && x.status !== "Completed");
        if (p) setSelected(p);
      },
    },
    {
      icon: <span className="text-xs">🧳</span>,
      text: "Receipt",
      className: "border border-slate-200 bg-slate-50 text-slate-900",
      onClick: (row: { id: string }) => {
        const p = paymentsList.find((x) => x.id === row.id && x.status === "Completed");
        if (p) downloadReceipt(p);
      },
    },
  ];

  const stats = [
    { icon: CheckCircle2, title: "Completed", value: paidCount,    desc: "Transactions paid" },
    { icon: Clock,        title: "Pending",   value: pendingCount,  desc: "Awaiting payment" },
    { icon: Banknote,     title: "Last Tx",   value: lastTx?.amount ?? "$0", desc: "Most recent amount", isText: true },
  ];

  return (
    <div className="space-y-[clamp(1.5rem,3vw,2rem)]">
      {/* HEADER */}
      <PageHeader
        variant="dark"
        label="Payments"
        title="Payment System"
        description="Manage and process manufacturer payments in real time."
      />

      {/* STATS */}
      <section className="grid gap-[clamp(1rem,2vw,1.5rem)] sm:grid-cols-3">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i} variant="primary" className="relative overflow-hidden p-[clamp(1.25rem,2vw,1.5rem)]">
              <div className="absolute -top-3 -right-3 h-24 w-24 text-white/[0.07] pointer-events-none rotate-12">
                <Icon className="h-full w-full" />
              </div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-[clamp(10px,0.9vw,11px)] font-semibold uppercase tracking-[0.24em] text-slate-300">
                    {stat.title}
                  </p>
                  <div className="mt-4 text-[clamp(1.5rem,2.5vw,1.875rem)] font-semibold text-white">
                    {stat.isText ? stat.value : <CountUpNumber value={stat.value as number} />}
                  </div>
                </div>
                <p className="mt-4 text-[clamp(12px,1.1vw,13px)] text-slate-300">{stat.desc}</p>
              </div>
            </Card>
          );
        })}
      </section>

      {/* TABLE */}
      <Card className="border border-slate-100 p-0 overflow-hidden bg-white">
        <DataTable
          heading="Transaction Log"
          TableHeaders={tableHeaders}
          TableData={tableData}
          TableButtons={tableButtons}
          currentPage={1}
          totalPages={1}
          onPageChange={() => {}}
          pageSize={paymentsList.length || 10}
          totalEntries={paymentsList.length}
        />
      </Card>

      {/* PAYMENT MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl overflow-hidden">
            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
              <h2 className="font-semibold text-white text-sm">Pay Invoice</h2>
              <button onClick={() => setSelected(null)} className="text-white/70 hover:text-white transition">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Invoice ID</span>
                  <span className="font-semibold">{selected.invoice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Amount Due</span>
                  <span className="font-bold text-sky-600">{selected.amount}</span>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl p-2.5 text-sm bg-slate-50 outline-none focus:border-sky-500"
                >
                  <option value="Bank Transfer">Bank Wire / Transfer</option>
                  <option value="Stripe">Credit / Debit Card (Stripe)</option>
                  <option value="JazzCash">JazzCash Mobile Wallet</option>
                  <option value="EasyPaisa">EasyPaisa Mobile Wallet</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setSelected(null)} className="flex-1 bg-slate-100 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-200 transition">Cancel</button>
                <button onClick={handlePayment} disabled={processing} className="flex-1 bg-sky-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-sky-700 transition disabled:opacity-60">
                  {processing ? "Processing..." : "Confirm Pay"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
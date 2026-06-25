"use client";

import { useState, useEffect, useMemo } from "react";
import { getClientInvoicesAction, payInvoiceAction } from "@/actions/client";
import Badge, { statusVariant } from "@/components/ui/Badge";
import CountUpNumber from "@/components/ui/CountUpNumber";
import { Card } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { PageHeader } from "@/components/ui/PageHeader";
import { CreditCard, FileCheck, Clock, DollarSign } from "lucide-react";

export default function InvoicesPage() {
  const [invoicesList, setInvoicesList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState<any | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [payingInvoice, setPayingInvoice] = useState<any | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");
  const [processingPayment, setProcessingPayment] = useState(false);

  const fetchInvoices = async () => {
    try {
      const res = await getClientInvoicesAction();
      setInvoicesList(res);
    } catch (err) {
      console.error("Error fetching client invoices:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchInvoices(); }, []);

  useEffect(() => {
    document.body.style.overflow = selectedInvoice || payingInvoice ? "hidden" : "auto";
  }, [selectedInvoice, payingInvoice]);

  const filteredInvoices = useMemo(() => {
    return invoicesList.filter((inv) => {
      const matchesSearch =
        inv.invoiceId.toLowerCase().includes(search.toLowerCase()) ||
        inv.customer?.toLowerCase().includes(search.toLowerCase()) ||
        inv.orderId.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "all" ? true : inv.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [invoicesList, search, statusFilter]);

  const totalInvoices = invoicesList.length;
  const paidInvoices = invoicesList.filter((i) => i.status === "Paid").length;
  const pendingInvoices = invoicesList.filter((i) => i.status === "Pending").length;
  const totalRevenue = invoicesList
    .filter((i) => i.status === "Paid")
    .reduce((acc, i) => acc + Number(i.amount.replace(/[^0-9.-]+/g, "")), 0);

  const handlePayment = async () => {
    if (!payingInvoice || processingPayment) return;
    setProcessingPayment(true);
    try {
      const res = await payInvoiceAction(payingInvoice.invoiceId, paymentMethod);
      if (res.ok) {
        setPayingInvoice(null);
        fetchInvoices();
      }
    } catch (err) {
      console.error("Error processing invoice payment:", err);
    } finally {
      setProcessingPayment(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-sky-600" />
        <p className="text-sm font-medium text-slate-500">Loading invoices...</p>
      </div>
    );
  }

  // Table config
  const tableHeaders = [
    { key: "invoiceId", label: "Invoice" },
    { key: "orderId",   label: "Order ID" },
    { key: "date",      label: "Date" },
    { key: "amount",    label: "Amount" },
    { key: "status",    label: "Status" },
  ];

  const tableData = filteredInvoices.map((inv) => ({
    id: inv.id,
    invoiceId: <span className="font-mono font-semibold text-slate-700">{inv.invoiceId}</span>,
    orderId:   <span className="font-mono text-xs text-slate-500">{inv.orderId}</span>,
    date:      inv.date,
    amount:    <span className="font-semibold text-slate-900">{inv.amount}</span>,
    status:    <Badge variant={statusVariant(inv.status)}>{inv.status}</Badge>,
  }));

  const tableButtons = [
    {
      icon: <span className="text-xs">👁</span>,
      text: "View",
      className: "bg-slate-950 text-white",
      onClick: (row: { id: string }) => {
        const inv = invoicesList.find((i) => i.id === row.id);
        if (inv) setSelectedInvoice(inv);
      },
    },
    {
      icon: <span className="text-xs">💳</span>,
      text: "Pay Now",
      className: "bg-sky-600 text-white",
      onClick: (row: { id: string }) => {
        const inv = invoicesList.find((i) => i.id === row.id && i.status === "Pending");
        if (inv) setPayingInvoice(inv);
      },
    },
  ];

  const filterActions = (
    <div className="flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
        placeholder="Search invoice or order ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm outline-none focus:border-sky-500 bg-white"
      />
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 outline-none"
      >
        <option value="all">All statuses</option>
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );

  const stats = [
    { icon: FileCheck, title: "Total Invoices", value: totalInvoices, desc: "Invoices issued" },
    { icon: CreditCard, title: "Paid",           value: paidInvoices, desc: "Successfully paid" },
    { icon: Clock,      title: "Pending",         value: pendingInvoices, desc: "Awaiting payment" },
    { icon: DollarSign, title: "Total Paid",      value: `$${totalRevenue.toLocaleString()}`, desc: "Revenue collected", isText: true },
  ];

  return (
    <>
      <div className="space-y-[clamp(1.5rem,3vw,2rem)]">
        {/* HEADER */}
        <PageHeader
          variant="dark"
          label="Invoices"
          title="Invoice Dashboard"
          description="Search, filter, manage and process all your manufacturer invoices."
        />

        {/* STATS */}
        <section className="grid gap-[clamp(1rem,2vw,1.5rem)] sm:grid-cols-2 xl:grid-cols-4">
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
            heading="Invoice List"
            TableHeaders={tableHeaders}
            TableData={tableData}
            TableButtons={tableButtons}
            currentPage={1}
            totalPages={1}
            onPageChange={() => {}}
            pageSize={filteredInvoices.length || 10}
            totalEntries={filteredInvoices.length}
            headerActions={filterActions}
          />
        </Card>
      </div>

      {/* VIEW MODAL */}
      {selectedInvoice && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelectedInvoice(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
              <h2 className="font-semibold text-white text-sm">Invoice Details</h2>
              <button onClick={() => setSelectedInvoice(null)} className="text-white/70 hover:text-white transition">✕</button>
            </div>
            <div className="p-6 space-y-3 text-sm">
              {[
                { label: "Invoice ID", value: selectedInvoice.invoiceId },
                { label: "Associated Order", value: selectedInvoice.orderId },
                { label: "Issue Date", value: selectedInvoice.date },
                { label: "Total Amount", value: selectedInvoice.amount },
                { label: "Client", value: selectedInvoice.customer },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">{label}</span>
                  <span className="font-semibold text-slate-900">{value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-1">
                <span className="text-slate-500">Payment Status</span>
                <Badge variant={statusVariant(selectedInvoice.status)}>{selectedInvoice.status}</Badge>
              </div>
            </div>
            <div className="px-6 pb-6">
              <button
                onClick={() => setSelectedInvoice(null)}
                className="w-full bg-slate-900 text-white font-semibold py-2.5 rounded-xl hover:bg-slate-800 transition"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PAYMENT MODAL */}
      {payingInvoice && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl overflow-hidden">
            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
              <h2 className="font-semibold text-white text-sm">Process Payment</h2>
              <button onClick={() => setPayingInvoice(null)} className="text-white/70 hover:text-white transition">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Invoice ID</span>
                  <span className="font-semibold">{payingInvoice.invoiceId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Amount Due</span>
                  <span className="font-bold text-sky-600">{payingInvoice.amount}</span>
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
                <button onClick={() => setPayingInvoice(null)} className="flex-1 bg-slate-100 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-200 transition">Cancel</button>
                <button onClick={handlePayment} disabled={processingPayment} className="flex-1 bg-sky-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-sky-700 transition disabled:opacity-60">
                  {processingPayment ? "Processing..." : "Confirm Payment"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
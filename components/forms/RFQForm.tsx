// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import Button from "../ui/Button";
// import Field from "../../src/components/ui/Field";
// import Input from "../../src/components/ui/Input";
// import Textarea from "../../src/components/ui/Textarea";
// import { submitRfqAction } from "../../src/actions/rfq";

// const schema = z.object({
//   fullName: z.string().min(2, "Full Name is required"),
//   brandName: z.string().min(1, "Brand Name is required"),
//   email: z.string().email("Enter a valid email"),
//   whatsapp: z.string().optional(),
//   productType: z.string().min(1, "Product Type is required"),
//   quantity: z.number().min(1, "Quantity must be at least 1"),
//   fabricType: z.string().optional(),
//   printingMethod: z.string().optional(),
//   sizeChart: z.string().optional(),
//   deliveryCountry: z.string().min(1, "Delivery Country is required"),
//   techPack: z.any().optional(),
//   notes: z.string().optional(),
// });

// type RFQFormData = z.infer<typeof schema>;

// export default function RFQForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting, isSubmitSuccessful },
//   } = useForm<RFQFormData>({
//     resolver: zodResolver(schema),
//   });

//   async function onSubmit(data: RFQFormData) {
//     try {
//       const techPackFileName = (data as any).techPack?.[0]?.name;
//       const result = await submitRfqAction({
//         ...data,
//         techPackFileName,
//       });

//       if (!result.ok) {
//         throw new Error(result.error || "Failed to submit RFQ");
//       }

//       reset();
//     } catch (err) {
//       console.error(err);
//       alert("There was an error submitting the RFQ.");
//     }
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="grid grid-cols-1 md:grid-cols-2 gap-4"
//     >
//       <Field label="Full Name" error={errors.fullName?.message}>
//         <Input
//           {...register("fullName")}
//           placeholder="Full Name"
//         />
//       </Field>

//       <Field label="Brand Name" error={errors.brandName?.message}>
//         <Input
//           {...register("brandName")}
//           placeholder="Brand Name"
//         />
//       </Field>

//       <Field label="Email" error={errors.email?.message}>
//         <Input
//           {...register("email")}
//           placeholder="Email Address"
//         />
//       </Field>

//       <Field label="WhatsApp">
//         <Input
//           {...register("whatsapp")}
//           placeholder="WhatsApp Number"
//         />
//       </Field>

//       <Field label="Product Type" error={errors.productType?.message}>
//         <Input
//           {...register("productType")}
//           placeholder="Product Type (T-Shirt, Hoodie, Polo etc.)"
//         />
//       </Field>

//       <Field label="Quantity" error={errors.quantity?.message}>
//         <Input
//           type="number"
//           {...register("quantity", { valueAsNumber: true })}
//           placeholder="Quantity"
//         />
//       </Field>

//       <Field label="Fabric Type">
//         <Input
//           {...register("fabricType")}
//           placeholder="Fabric Type (Cotton, Polyester, Fleece etc.)"
//         />
//       </Field>

//       <Field label="Printing Type">
//         <Input
//           {...register("printingMethod")}
//           placeholder="Printing Type (Screen Print, DTG, Embroidery)"
//         />
//       </Field>

//       <Field label="Size Chart">
//         <Input
//           {...register("sizeChart")}
//           placeholder="Size Chart (XS,S,M,L,XL)"
//         />
//       </Field>

//       <Field label="Delivery Country" error={errors.deliveryCountry?.message}>
//         <Input
//           {...register("deliveryCountry")}
//           placeholder="Delivery Country"
//         />
//       </Field>

//       <div className="md:col-span-2">
//         <label className="block mb-2 font-medium">
//           Upload PDF Tech Pack
//         </label>
//         <input
//           type="file"
//           accept=".pdf"
//           {...register("techPack")}
//           className="w-full border p-3 rounded"
//         />
//       </div>

//       <div className="md:col-span-2">
//         <Textarea
//           {...register("notes")}
//           placeholder="Additional Notes / Requirements"
//           rows={5}
//         />
//       </div>

//       <div className="md:col-span-2 flex items-center gap-4">
//         <Button type="submit">
//           {isSubmitting ? "Sending..." : "Submit RFQ"}
//         </Button>

//         {isSubmitSuccessful && (
//           <p className="text-green-600">
//             Thank you! Your RFQ has been submitted successfully.
//           </p>
//         )}
//       </div>
//     </form>
//   );
// }
"use client";

import { useState } from "react";

export default function LandingRFQForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      contact: formData.get("contact"),
      message: formData.get("message"),
    };

    try {
      // 👉 yahan apna API / server action lagana
      console.log("RFQ Submitted:", data);

      setSuccess(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send RFQ");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center px-4 py-12 bg-slate-50">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-sm">
        
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-slate-900">
          Get a Free Quote
        </h1>
        <p className="mt-2 text-slate-600">
          Tell us what you need — we will respond quickly on WhatsApp or email.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          {/* Name */}
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-500 outline-none"
          />

          {/* Contact */}
          <input
            name="contact"
            type="text"
            required
            placeholder="Email or WhatsApp Number"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-500 outline-none"
          />

          {/* Message */}
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us what you want (e.g. 100 T-shirts, logo printing, fabric type...)"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-500 outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Request Quote"}
          </button>

          {/* Success */}
          {success && (
            <p className="text-green-600 text-sm text-center">
              Thank you! We will contact you soon.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
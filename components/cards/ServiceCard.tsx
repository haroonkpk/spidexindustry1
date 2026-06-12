import Card from "../ui/Card";

interface Service {
  id: string;
  title: string;
  description: string;
  moq: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="transition-shadow hover:border-primary/30 hover:shadow-md">
      <h4 className="text-lg font-semibold text-primary">{service.title}</h4>
      <p className="mt-2 text-slate-600">{service.description}</p>
      <div className="mt-4 text-sm font-medium text-slate-500">
        Min. Order: {service.moq} units
      </div>
    </Card>
  );
}

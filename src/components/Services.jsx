export default function Services() {
  //

  const services = [
    { name: "Healthcare", icon: "healthcare" },
    { name: "Finance", icon: "finance" },
    { name: "Education", icon: "education" },
    { name: "E-commerce", icon: "ecommerce" },
    { name: "Real Estate", icon: "realestate" },
    { name: "Travel", icon: "travel" },
    { name: "Entertainment", icon: "entertainment" },
    { name: "Technology", icon: "technology" },
  ];
  //
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold">Industries We Serve</h2>
        <p className="max-w-125">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quos
          voluptas voluptatum officiis possimus beatae, optio nesciunt minus vel
          asperiores?
        </p>
        <div className="grid grid-cols-4 mt-5">
          {services.map((service, i) => (
            <div key={i} className="text-center p-20 bg-[#f9f9f9] border-1">
              <h3>{service.name}</h3>
              <h5>{service.icon}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

const LocationMap = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-heading">Our Location</h2>
          <p className="text-body mt-2">
            Visit our studio at Patia, Bhubaneswar, Odisha.
          </p>
        </div>

        {/* Map */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg border">
          <iframe
            title="Studio Location - Patia, Bhubaneswar"
            src="https://www.google.com/maps?q=Patia,+Bhubaneswar,+Odisha&output=embed"
            className="h-[450px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationMap;

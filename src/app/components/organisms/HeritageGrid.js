import HeritageCard from "../molecules/HeritageCard";

export default function HeritageGrid({
  sites,
  onViewDetails,
}) {
  return (
    <div className="heritage-grid">
      {sites.map((site) => (
        <HeritageCard
          key={site.id}
          title={site.title}
          location={site.location}
          description={site.description}
          image={site.image}
          onViewDetails={() => onViewDetails(site)}
        />
      ))}
    </div>
  );
}
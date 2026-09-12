import Image from "../atoms/Image";
import Icon from "../atoms/Icon";
import Button from "../atoms/Button";

export default function HeritageCard({
  title,
  location,
  description,
  image,
  onViewDetails,
}) {
  return (
    <article className="heritage-card">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="heritage-card-image"
      />

      <div className="heritage-card-content">
        <h3>{title}</h3>

        <div className="heritage-card-location">
          <Icon name="location" size={17} />
          <span>{location}</span>
        </div>

        <p>{description}</p>

        <Button onClick={onViewDetails}>
          View Details
        </Button>
      </div>
    </article>
  );
}
import ConceptItem from "./ConceptItem";
import "./Concepts.css";

const Concepts = ({ list }) => {
  return (
    <ul id="concepts">
      {list.map(({ id, title, image, description }) => (
        <ConceptItem
          key={id}
          title={title}
          image={image}
          description={description}
        />
      ))}
    </ul>
  );
};

export default Concepts;
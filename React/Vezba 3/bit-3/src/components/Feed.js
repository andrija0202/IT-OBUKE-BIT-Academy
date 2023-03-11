import FeedList from "./FeedList";
import AddClassMaterials from "./AddClassMaterials";
import Module from "./Module";
import AdditionalReading from "./AdditionalReading";

function Feed() {
  return (
    <div className="feed">
      <FeedList />
      <AddClassMaterials />
      <Module />
      <AdditionalReading />
    </div>
  );
}

export default Feed;

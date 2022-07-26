export default function PhotoListFromProps({ imageList, imageStyle }) {
  return (
    <div>
      {Object.entries(imageList).map(([imageUrl]) => (
        <div key={imageUrl}>
          <img src={imageUrl} class={imageStyle} />
        </div>
      ))}
    </div>
  );
}

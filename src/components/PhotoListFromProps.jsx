export default function PhotoListFromProps({ imageList, imageStyle }) {
  return (
    <div>
      {Object.entries(imageList).map(([imageUrl]) => (
        <div key={imageUrl}>
          {/* This is a dumb hacky workaround because rollup breaks the image paths after bundling */}
          <img src={imageUrl.substring(12)} class={imageStyle} />
        </div>
      ))}
    </div>
  );
}

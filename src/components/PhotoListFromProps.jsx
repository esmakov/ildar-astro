// Shortening the URL is a dumb hacky workaround because rollup breaks the image paths after bundling, and won't bundle them if you initially set them to the final build path

export default function PhotoListFromProps({ imageList, imageStyle }) {
  return (
    <div>
      {Object.entries(imageList).map(([imageUrl]) => (
        <div key={imageUrl}>
          <img src={imageUrl.substring(12)} class={imageStyle} />
        </div>
      ))}
    </div>
  );
}

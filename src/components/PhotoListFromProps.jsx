// Takes glob import [imagepath:string, {}] and returns an array of image paths, starting at the substring() index
export default function PhotoListFromProps({ imageList, imageClass, alt }) {
  return (
    <div className="flex flex-col gap-4">
      {Object.entries(imageList).map(([imageUrl]) => (
        <img
          key={imageUrl}
          src={imageUrl.substring(15)} // Dumb hacky workaround because rollup breaks the image paths after bundling, and won't bundle them if you initially set them to the final build path made by Esbuild
          class={imageClass}
          alt={alt}
          loading="lazy"
        />
      ))}
    </div>
  );
}

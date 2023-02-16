// Takes glob import [imagepath:string, {}] and returns an array of image paths, starting at the substring() index
export default function PhotoListFromProps({ imageList, imageClass, alt }) {
  return (
    <div className="flex flex-col gap-4">
      {Object.entries(imageList).map(([imageUrl]) => (
        <img
          key={imageUrl}
          // Cut off "../../../public" from relative path needed for glob import
          // It's a dumb hacky workaround because rollup breaks the image paths after bundling, and won't bundle them if you initially set them to the final build path made by Esbuild
          src={imageUrl.substring(15)}
          class={imageClass}
          alt={alt}
          loading="lazy"
        />
      ))}
    </div>
  );
}

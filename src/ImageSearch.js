import React from "react";

const ImageSearch = ({ imageResults, loading }) => {
	console.log(imageResults);
	return (
		<div className="flex flex-wrap justify-center">
			{imageResults.map((image, index) => (
				<div className="m-2">
					<a href={image.link} target="_blank" rel="noopener noreferrer">
						<img
							key={index}
							src={image.sourceUrl}
							className=" h-40 w-32 object-contain hover:scale-200 hover:delay-150"
							alt=""
						/>
					</a>
					<p className="text-xs text-gray-600 my-2">
						{image.title.slice(0, 18) + (image.title.length > 18 ? "..." : "")}
					</p>
				</div>
			))}
		</div>
	);
};

export default ImageSearch;

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { MoreVertOutlined } from "@mui/icons-material";

const RelatedSearch = ({ results }) => {
	console.log(results);
	return (
		<div className="ml-32 my-8">
			<div className="flex items-center">
				<h2 className="text-xl font-medium">Related Searches</h2>
				<MoreVertOutlined className="ml-4" />
			</div>
			<div className="flex flex-wrap w-1/2 my-4">
				{results.map((result, index) => (
					<div
						key={index}
						className="bg-blue-800  rounded-full p-2 mr-1 my-1 w-2/5"
					>
						<SearchIcon className="mx-2 text-white" />
						<a href={result.url} className="text-amber-50">
							{result.title.slice(0, 18) +
								(result.title.length > 18 ? "..." : "")}
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default RelatedSearch;

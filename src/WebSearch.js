import React from "react";
import {
	ClimbingBoxLoader,
	ClockLoader,
	PuffLoader,
	RingLoader,
	SyncLoader,
} from "react-spinners";
import RelatedSearch from "./RelatedSearch";

const WebSearch = ({ results, loading, relatedResults }) => {
	return loading ? (
		<div className="flex justify-center items-center h-screen">
			<ClimbingBoxLoader
				color="rgb(50, 212, 226)"
				loading={loading}
				size={20}
			/>
		</div>
	) : (
		<>
			<div className="w-1/2 ml-32">
				{results.map((result) => (
					<div key={result.position} className="my-4">
						<p className="text-xs">{result.destination}</p>
						<a
							href={result.url}
							target="_blank"
							rel="noreferrer"
							className="hover:underline decoration-solid decoration-sky-400 text-sky-400 text-lg font-semibold"
						>
							{result.title}
						</a>
						<p className="text-sm">{result.description}</p>
					</div>
				))}
			</div>
			{relatedResults.length > 0 && <RelatedSearch results={relatedResults} />}
		</>
	);
};

export default WebSearch;

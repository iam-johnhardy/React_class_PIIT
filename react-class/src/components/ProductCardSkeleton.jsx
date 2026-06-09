import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCardSkeleton = () => {
	return (
		<div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm max-w-sm w-full">
			{/* Image Skeleton */}
			<div className="w-full h-56">
				<Skeleton height="100%" />
			</div>

			{/* Content */}
			<div className="p-5 space-y-4">
				{/* Title + Badge */}
				<div className="flex items-start justify-between gap-3">
					<div className="flex-1">
						<Skeleton height={24} width="80%" />
					</div>

					<Skeleton height={28} width={70} borderRadius={9999} />
				</div>

				{/* Description */}
				<div className="space-y-2">
					<Skeleton height={14} />
					<Skeleton height={14} />
					<Skeleton height={14} width="70%" />
				</div>

				{/* Contact Section */}
				<div className="border-t border-gray-100 pt-4 space-y-4">
					{/* Email */}
					<div className="space-y-2">
						<Skeleton height={10} width={50} />
						<Skeleton height={16} width="90%" />
					</div>

					{/* Phone */}
					<div className="space-y-2">
						<Skeleton height={10} width={50} />
						<Skeleton height={16} width="60%" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCardSkeleton;

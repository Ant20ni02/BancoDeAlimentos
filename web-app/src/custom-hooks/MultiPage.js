import { useCallback, useMemo, useState } from "react";

export default function useMultiStep({ values: values_, pageSize }) {
	const values = values_ ?? [];
	const [page, setPage] = useState(0);
	
	const maxPage = useMemo(
		() => Math.ceil(values.length / pageSize),
		[values, pageSize]
	);
	
	const next = useCallback(() => {
    	setPage((page) => Math.min(page + 1, maxPage - 1));
	});
	
	const previous = useCallback(() => {
		setPage((page) => Math.max(page - 1, 0));
	});
	
	const pageValues = useMemo(
		() => values.slice(page * pageSize, (page + 1) * pageSize),
		[values, page, pageSize]
	);
	
	const reset = useCallback(() => {
		setPage(0);
	});
	
	const goTo = useCallback((index) => {
		setPage(index);
	});
	
	return {
		maxPage,
		page,
		isFirstStep: page === 0,
		isLastStep: page === maxPage - 1,
		next,
		previous,
		reset,
		goTo,
		pageValues
	};
}

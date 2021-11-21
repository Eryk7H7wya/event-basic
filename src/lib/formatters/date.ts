export const formatDate = (d?: Date): string => {
	return d ? d.toLocaleString(navigator.language, {year: 'numeric', month: 'numeric', day: 'numeric'}) : '';
}
export default function convertTime(duration) {
	const MINUTE_SECONDS = 60;
	const HOUR_SECONDS = MINUTE_SECONDS * 60;

	const hours = Math.floor(duration / HOUR_SECONDS);

	const minutesInSeconds = duration % HOUR_SECONDS;

	const minutes = Math.floor(minutesInSeconds / MINUTE_SECONDS);
	const seconds = duration % MINUTE_SECONDS;

	return { hours, minutes, seconds };
}

import { useSelector } from 'react-redux';
import { breedsNamesSelector } from '../store/selectors';

export const IconSearch = ({ onChange, input }) => {
	const breedNamesIds = useSelector(breedsNamesSelector);
	const handleClick = () => {
		const search = input.current.value.toLowerCase();
		if (!search) {
			onChange(undefined);
			return;
		}

		const matchedBreedId = Object.entries(breedNamesIds).find((item) => {
			const name = item[1];
			return name.toLowerCase().includes(search);
		});

		onChange(matchedBreedId?.[0]);
	};
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			onClick={handleClick}
		>
			<g clip-path='url(#clip0_2_3220)'>
				<path
					d='M19.3593 18.2168L14.5993 13.2662C15.8232 11.8113 16.4937 9.98069 16.4937 8.07499C16.4937 3.62251 12.8712 0 8.41874 0C3.96626 0 0.34375 3.62251 0.34375 8.07499C0.34375 12.5275 3.96626 16.15 8.41874 16.15C10.0903 16.15 11.6831 15.6458 13.045 14.6888L17.8412 19.677C18.0417 19.8852 18.3113 20 18.6003 20C18.8738 20 19.1332 19.8957 19.3302 19.7061C19.7487 19.3034 19.762 18.6357 19.3593 18.2168ZM8.41874 2.10652C11.7098 2.10652 14.3872 4.78391 14.3872 8.07499C14.3872 11.3661 11.7098 14.0435 8.41874 14.0435C5.12766 14.0435 2.45027 11.3661 2.45027 8.07499C2.45027 4.78391 5.12766 2.10652 8.41874 2.10652Z'
					fill='#FF868E'
				/>
			</g>
			<defs>
				<clipPath id='clip0_2_3220'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};

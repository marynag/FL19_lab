import {
	IconDislikeBig,
	IconDislikeSmall,
	IconFavouriteBig,
	IconFavouriteSmall,
	IconLikeBig,
	IconLikeSmall,
} from '../../svg';

export const reactionsMap = {
	smile: { IconLikeSmall },
	like: { IconFavouriteSmall },
	sad: { IconDislikeSmall },
};

const REACTIONS = [
	{ text: 'smile', component: IconLikeBig },
	{ text: 'like', component: IconFavouriteBig },
	{ text: 'sad', component: IconDislikeBig },
];

export default REACTIONS;

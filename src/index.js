import './sass/main.scss';
import refs from './js/refs';
import './js/gallery_services_card/card_markup';
import './js/markups';
import { checkedClientActivity } from './js/checkedClientActivity';

const { activityList } = refs;

activityList.addEventListener('click', checkedClientActivity);

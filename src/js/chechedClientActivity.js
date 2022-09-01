import refs from './refs';
const { activityItems } = refs;

export const checkedClientActivity = e => {
  activityItems.forEach(item => {
    if (item.classList.contains('checked')) item.classList.remove('checked');
  });
  if (e.target.nodeName === 'INPUT') {
    e.target.parentNode.parentNode.classList.add('checked');
  }
};

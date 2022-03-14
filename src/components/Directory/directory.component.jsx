import './directory.styles.scss';
import Category from '../Category/category.component';

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(category => (
        <Category key={category.id} {...category} />
      ))}
    </div>
  );
};

export default Directory;

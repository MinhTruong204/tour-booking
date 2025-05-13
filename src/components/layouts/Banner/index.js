import styles from './Banner.module.scss';
import banner from '../../../assets/images/banner-layout.jpg';
function Banner(props) {
  return (
    <div className={styles.banner}>
        <img src={props.img}></img>
        <h1 className='container'>{props.children}</h1>
        
    </div>
  );
}
export default Banner;



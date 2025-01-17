import Button from '../../components/Button';
import { socialIcons } from '../../utils/TechIcons';
import { FooterBody } from './style';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterBody>
      <div className="contacts">
        <h3>Contatos</h3>
        <div>
          {Object.entries(socialIcons).map(
            ([socialIconName, { url, icon }]) => (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Button TechIcon={icon} size="fit" />
              </a>
            )
          )}
        </div>
      </div>

      <p>{currentYear} - &copy; Portfolio Daniel Martins</p>
      <p>
        Icons by{' '}
        <a href="https://icons8.com.br/icons" target="_blank" rel="noreferrer">
          Icons8
        </a>
        ,{' '}
        <a
          href="https://www.mongodb.com/company/newsroom/brand-resources"
          target="_blank"
          rel="noreferrer"
        >
          MongoDb
        </a>{' '}
        &{' '}
        <a href="https://iconduck.com/" target="_blank" rel="noreferrer">
          Iconduck
        </a>
      </p>
    </FooterBody>
  );
};

export default Footer;

import React from 'react';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import styles from './SearchResult.scss';

class SearchResult extends React.Component {
    
  static defaultProps = {
    icon: settings.defaultColumnIcon,
    title: 'Search results',
  }

  static propTypes = {
    icon: PropTypes.string,
    cards: PropTypes.array,
    title: PropTypes.string,
  }

  render(){
    const {icon, cards, title} = this.props;

    return(
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={title}>
            <Icon name={icon}/>
          </span>
          {title}
        </h3>
        <div>
          {cards.map(crd => (
            <Card key={crd.id} {...crd}/>
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResult;
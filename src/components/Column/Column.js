import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import {settings} from '../../data/dataStore';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {

    static propTypes = {
      title: PropTypes.string,
      cards: PropTypes.array,
      icon: PropTypes.string,
    }

    render() {
      const {title, icon, cards} = this.props;

      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={title}>
              <Icon name={icon}/>
            </span>
            {this.props.title}
                    
          </h3>
          <div>
            {cards.map(crd => (
              <Card key={crd.id} {...crd}/>
            ))}
          </div>
          {/* <div>
            <Creator text={settings.cardCreatorText} action={cardTitle=>this.addCard(cardTitle)}/>
          </div> */}
        </section>
      );
    }
}

export default Column;
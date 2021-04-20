import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {

    state = {
        cards: this.props.cards || [],
    }

    static propTypes = {
        title: PropTypes.string,
        cards: PropTypes.array,
        icon: PropTypes.string,
    }

    addColumn(cardTitle){
       this.setState(st=> (
           {
               cards: [
                   ...st.cards,
                   {
                       key: st.cards.length? st.cards[st.cards.length - 1].key+1:0,
                       title: cardTitle
                   }
               ]
           }
       ))
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>
                <span className={styles.icon}>
                        <Icon name={this.props.icon}/>
                    </span>
                    {this.props.title}
                    
                </h3>
                <div>
                    {this.state.cards.map(({key, ...cardProps}) => (
                        <Card key={key} {...cardProps}/>
                    ))}
                </div>
                <div>
                    <Creator text={settings.cardCreatorText} action={cardTitle=>this.addColumn(cardTitle)}/>
                </div>
            </section>
        )
    }
}

export default Column;
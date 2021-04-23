import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
// import Creator from '../Creator/Creator';

class List extends React.Component {

    static propTypes = {
      title: PropTypes.node.isRequired,
      image: PropTypes.string,
      description: PropTypes.node,
      columns: PropTypes.array,
    }

    static defaultProps = {
      description: settings.defaultListDescription,
    }

    render() {
      const {title,image,description, columns} = this.props;
      return (
        <section className={styles.component}>
          <Hero titleText={title} image={image}/>
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(col=> (
              <Column key={col.id} {...col}/>
            ))}
          </div>
          {/* <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={columnTitle=>this.addColumn(columnTitle)}/>
          </div> */}
        </section>
      );
    }
}

export default List;
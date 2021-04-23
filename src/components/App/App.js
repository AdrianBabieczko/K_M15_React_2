import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import PropTypes from 'prop-types';

class App extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    lists: PropTypes.array,
  }

  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {
          lists.map(lst => (
            <List key={lst.id} {...lst}/>
          ))
        }
      </main>
    );
  }
}

export default App;

import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {

    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node,
        imgAddress: PropTypes.string,
    }

    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
        imgAddress: '',
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} imgAddress={this.props.imgAddress}/>
                <div className={styles.description}>
                    {this.props.children}
                </div>
                <div className={styles.columns}>
                    <Column title={'Column1'}/>
                    <Column title={'Column2'}/>
                    <Column title={'Column3'}/>
                </div>
            </section>
        )
    }
}

export default List;
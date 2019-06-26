import React, { Component,Fragment } from 'react'
import { Dropdown,Label } from 'semantic-ui-react';
import { UserContext } from '../../contexts/UserContext';

class SecteurPicker extends Component {

    setSecteur = (e, { value }) => {
        this.props.onChange(this.props.target,value);
    }

    render() {
        return (
            <Dropdown style={{marginLeft:"8px"}} inline options={this.props.sites.filter(s=>s.key == this.props.site)[0].secteurs} placeholder=' [SECTEUR] ' onChange={this.setSecteur} />
        )
    }
}

const withUserContext = WrappedComponent => props => (
    <UserContext.Consumer>
        {ctx => <WrappedComponent {...ctx} {...props}/>}
    </UserContext.Consumer>
)

export default wrappedInUserContext = withUserContext(SecteurPicker);
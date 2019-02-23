import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import ReactPlayer from 'react-player'

const styles = {
	card: {
		// minWidth: 'auto',
		// margin: 'auto',
	}, 
	cardMedia: {
	}
}


class Pane extends Component {
	state = {
		hover: false
	}

	constructor(props) {
		super(props)
		this.classes = props
	}

	toggleHover = () => {
		this.setState({ hover: !this.state.hover })
	}

	render() {
		const { hover } = this.state
		const card = (
			<Card shadow={5} className={this.classes.card}>
				<ReactPlayer 
					url={this.props.video} 
					width="100%" 
					height="100%" 
					playing={hover}
					loop={true}
					volume={0}/>
				<CardActionArea>						
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{this.props.info.name}
						</Typography>
						<Typography component="p">
							{this.props.info.description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		)
		if (this.props.info.link.length > 0) {
			return (
				<div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
					<a target="_blank" href={this.props.info.link} style={{textDecoration: 'none'}}>
						{card}
					</a>
				</div>
			)
		} else {
			return (
				<div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
					{card}
				</div>
			)
		}
	}
}

Pane.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pane);
import React, { Component } from 'react'
import Pane from './pane'
import { Grid } from '@material-ui/core/'

function importAll(r) {
	let files = {}
	r.keys().map((item, index) => { 
		let res = item.split("/")
		let project = res[1]
		let file = res[2].split(".")[0]
		if (typeof files[project] == 'undefined') {
			files[project]  = {}
		}
		files[project][file] = r(item) 
	})
	return files
}

const projects = importAll(require.context('../projects'))

function getPane(projects, keys, i) {
	if (i >= keys.length) {
		return 
	}
	return <Pane video={projects[keys[i]].video} info={projects[keys[i]].info}/>
}

const rowLength = 3

function createPanes(projects) {
	let gridItems = []
	let keys = Object.keys(projects).sort()

	for (var i = 0; i < keys.length; i += rowLength) {
		let row
		let panes = []
		for (var j = 0; j < rowLength; j += 1) {
			panes.push(
				<Grid item sm>
					{ getPane(projects, keys, i+j) }
				</Grid>	
			)
		}
		
		row = 
			<React.Fragment>
				{ panes }
			</React.Fragment>
			
		gridItems.push(
			<Grid container item xs={12} spacing={24}>
				{row}
			</Grid>
		)
	}
	return gridItems
}

class Projects extends Component {
	render() {
		return (
		  <Grid container 
		  	direction='row' 
		  	alignItems='center' 
		  	justify='space-evenly'
		  	spacing={40}
		  	style={{ paddingTop: 50 }}>
              
        { createPanes(projects) }
      </Grid>
		)
	}
}

export default Projects
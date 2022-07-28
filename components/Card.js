export default ({data, source}) => {

	// Set image URL
	let imgURI = source == 'dribbble' ? data.images.normal : data.media_url

	// Set image alt
	let imgAlt = source == 'dribbble' ? data.title : data.caption

	return (
		<div className='card col-12 col-md-6'>
			<div className='card-wrapper'>
				<img src={imgURI} alt={imgAlt} className='card-image img-thumbnail' />
				<div className='card-data'>
					{data.title && <h2 className='card-title'>{data.title}</h2>}
					{data.description && <p className='card-text'>{removeTags(data.description)}</p>}
					{source == 'dribbble' && <a href='#' className='btn-primary card-link'>View details</a>}
				</div>
			</div>
		</div>
	)
}

// Remove HTML tags from strings
const removeTags = string => {

	// String is null
	if ((string === null) || (string === ''))
		return false

	// Regular expression to identify HTML tags in the input string.
	// Replacing the identified HTML tag with a null string.
	return string.replace(/(<([^>]+)>)/ig, '')
}

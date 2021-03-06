import { useRouter } from 'next/router'
import { useState } from 'react'
import DatePicker from 'react-datepicker'


export default function AddCrop() {
	const [cropName, setCropName] = useState('')
	const [infestationLevel, setInfestation] = useState(0)
	const [infestationDate, setInfestationDate] = useState(new Date())
	const [hydrationLevel, setHydration] = useState(0)
	const [hydrationDate, setHydrationDate] = useState(new Date())
	const [error, setError] = useState('')
	const [message, setMessage] = useState('')
	const router = useRouter()

	const handlePost = async (e) => {
		e.preventDefault();

		// reset error and message
		setError('')
		setMessage('')

		// fields check
		if (!cropName) return setError('You must enter a name for the crop')

		// cropPost structure
		let crop = {
			cropName,
			hydrationLevel,
			infestationLevel,
			hydrationDate,
			infestationDate,
			initialCreation: new Date().toISOString()
		}


		//console.log('$$$$$$$$$$$$$$$:   ', crop)
		// save the post
		let response = await fetch('/api/crops', {
			method: 'POST',
			body: JSON.stringify(crop),
		})

		// get the data
		let data = await response.json()

		if (data.success) {
			// reset the fields
			setCropName('')
			setInfestation(0)
			setInfestationDate(new Date())
			setHydration(0)
			setHydrationDate(new Date())
			// set the message
			return (
				setMessage(data.message),
				router.push({
					pathname: '/cropAnalytics'
				})
			)
		} else {
			// set the error
			return setError(data.message)
		}
	}



	return (
		<section className= "box opacityLayer contentHeight">
			<div className="column is-full is-centered">
				<form className="sliderForm" onSubmit={handlePost}>
					{error ? (
						<div className="field">
							<h3 className="help is-danger">{error}</h3>
						</div>
					) : null}
					{message ? (
						<div className="field">
							<h3>{message}</h3>
						</div>
					) : null}
					<div className="column is-full is-vcentered has-text-centered">
						<h1 className="title is-2 is-spaced">Add a New Crop</h1>
						<h2 className="subtitle is-6">This form adds a new crop to the dashboard.</h2>
					</div>
					<hr />
					<div className="field is-horizontal">
						<div className="field-label is-normal">
							<label className="label">Crop Name</label>
						</div>
						<div className="field-body">
							<div className="field">
								<p className="control is-expanded">
									<input
										className="input"
										type="text"
										name="cropName"
										onChange={(e) => setCropName(e.target.value)}
										value={cropName}
										placeholder="Name the Crop"
									/>
								</p>
							</div>
						</div>
					</div>
					<div className="field is-horizontal">
						<div className="field-label is-normal">
							<label className="label">Hydration Level</label>
						</div>
						<div className="field-body">
							<div className="field has-addons">
								<div className="control">
									<output className="slider sliderOutput" htmlFor="sliderWithValue">{hydrationLevel}%</output>
								</div>
								<div className="control is-expanded">
									<input
										id="Hydration"
										className="slider has-output is-fullwidth"
										onChange={(e) => setHydration(e.target.valueAsNumber)}
										min="0"
										max="100"
										value={hydrationLevel}
										step="1"
										type="range"
									/>
								</div>
								<div className="control">
									<label className="label slider">Recorded on</label>
								</div>
								<div className="control">
									<DatePicker
										className="slider sliderCalendar"
										selected={hydrationDate}
										onChange={(date) => setHydrationDate(date)}
										monthsShown={2}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="field is-horizontal">
						<div className="field-label is-normal">
							<label className="label">Infestation Level</label>
						</div>
						<div className="field-body">
							<div className="field has-addons">
								<div className="control">
									<output className="slider sliderOutput" htmlFor="sliderWithValue">{infestationLevel}%</output>
								</div>
								<div className="control is-expanded">
									<input
										id="Infestation"
										className="slider has-output is-fullwidth"
										onChange={(e) => setInfestation(e.target.valueAsNumber)}
										min="0"
										max="100"
										value={infestationLevel}
										step="1"
										type="range"
									/>
								</div>
								<div className="control">
									<label className="label slider">Recorded on</label>
								</div>
								<div className="control">
									<DatePicker
										className="slider sliderCalendar"
										selected={infestationDate}
										onChange={(date) => setInfestationDate(date)}
										monthsShown={2}
									/>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div className="field is-grouped is-grouped-centered">
						<div className="control">
							<button className="button is-link" type="submit">Submit</button>
						</div>
						<div className="control">
							<a className="button is-dark" href="/cropAnalytics">Cancel</a>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

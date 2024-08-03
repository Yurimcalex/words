export default function TextTranslate({ theme, text, onBtnClick }) {
	return (
		<div className="text-translate">
			<div className={`roboto-lt fz-bgr lh-bgr`}>
				{text}
			</div>

			<button 
				className={`${theme}-btn`}
				onClick={onBtnClick}
			>
				Go Back!
			</button>			
		</div>
	);
}
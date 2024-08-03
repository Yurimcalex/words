export default function TextTranslate({ theme, text, onBtnClick }) {
	return (
		<div className="text-translate">
			<div 
				className={`${theme}-2 roboto-lt fz-bgr lh-bgr`}
				style={{ background: 'transparent' }}
			>
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
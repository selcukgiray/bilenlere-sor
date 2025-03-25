import classNames from 'classnames';

function Widget({ children, className, ref, ...props }) {
	return (
		<div
			ref={ref}
			className={classNames(
				'flex flex-col gap-8 rounded-large border p-6',
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
}

Widget.displayName = 'Widget';

function WidgetHeader({ children, className, ref, ...props }) {
	return (
		<div
			ref={ref}
			className={classNames('flex flex-col gap-y-1', className)}
			{...props}
		>
			{children}
		</div>
	);
}
WidgetHeader.displayName = 'WidgetHeader';

function WidgetTitle({ children, className, ref, ...props }) {
	return (
		<h1
			ref={ref}
			className={classNames('text-lg font-semibold', className)}
			{...props}
		>
			{children}
		</h1>
	);
}
WidgetTitle.displayName = 'WidgetTitle';

function WidgetDescription({ children, className, ref, ...props }) {
	return (
		<div
			ref={ref}
			className={classNames('text-default-600', className)}
			{...props}
		>
			{children}
		</div>
	);
}
WidgetDescription.displayName = 'WidgetDescription';

function WidgetBody({ children, className, ref, ...props }) {
	return (
		<div
			ref={ref}
			className={classNames('', className)}
			{...props}
		>
			{children}
		</div>
	);
}
WidgetBody.displayName = 'WidgetBody';

function WidgetFooter({ children, className, ref, ...props }) {
	return (
		<div
			ref={ref}
			className={classNames('', className)}
			{...props}
		>
			{children}
		</div>
	);
}
WidgetFooter.displayName = 'WidgetFooter';

export {
	Widget,
	WidgetHeader,
	WidgetTitle,
	WidgetDescription,
	WidgetBody,
	WidgetFooter,
};

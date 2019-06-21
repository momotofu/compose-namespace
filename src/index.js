export function composeNamespace(mainClass, classPre) {
	if (classPre) {
		let classesPre;

		if (typeof classPre === 'string')
			classesPre = classPre.split(' ').filter(item => item.length > 0);
		else if (Array.isArray(classPre))
			classesPre = classPre;

		return function(...inClasses) {
			if (inClasses.length < 1)
				return `${mainClass} ${classesPre.join(' ')}`;

			inClasses.unshift('');

			return inClasses.join(` ${mainClass}-`)
			+ ' '
			+ classesPre
				.map(classPre => inClasses.join(` ${classPre}-`)
				.substr(1))
				.join(' ')
		}
	} else {
		return function(...inClasses) {
			if (inClasses.length < 1)
				return `${mainClass}`;

			if (inClasses.length > 1) {
				inClasses.unshift('');

				return inClasses.join(` ${mainClass}-`).substr(1);
			}

			return `${mainClass}-${inClasses[0]}`;
		}
	}
}

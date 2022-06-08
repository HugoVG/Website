import { ShieldMaker } from './App';

export function listshield() {

	const imageShield: [string, string][] = [
		["https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white", "C#"],
		["https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white", ".NET"],
		["https://img.shields.io/badge/Xamarin-3498DB?style=for-the-badge&logo=xamarin&logoColor=white", "Xamarin"],
		["https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white", "Rust"],
		["https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white", "Java"],
		["https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white", "TypeScript"],
		["https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB", "React"],
		["https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white", "Node"],
		["https://img.shields.io/badge/SQL-000000?style=for-the-badge&logo=sql&logoColor=white", "SQL"],
		["https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white", "HTML"],
		["https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white", "CSS"],
		["https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E", "JavaScript"],
		["https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white", "AWS"],
		["https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white", "Json"],
		["https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white", "MIU"],
		["https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue", "Python"],
		["https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white", "Unity"],
		["https://img.shields.io/badge/KFC-F40027?style=for-the-badge&logo=kfc&logoColor=white", "KFC"],
		["https://img.shields.io/badge/OpenCV-27338e?style=for-the-badge&logo=OpenCV&logoColor=white", "OpenCV"],
		["https://img.shields.io/badge/WebAssembly-654FF0?style=for-the-badge&logo=WebAssembly&logoColor=white", "WASM"],
		["https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6", "AdobeXD"],
		["https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white", "Figma"],
		["https://img.shields.io/badge/microsoft%20azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white", "Azure"],
		["https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white", "Md"],
		["https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white", "GitHub Pages"],
		["https://img.shields.io/badge/NuGet-004880?style=for-the-badge&logo=nuget&logoColor=white", "NuGet"],
		["https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white", "JWT"]
	];
	return (
		imageShield.map(([url, alt]) => ShieldMaker(url, alt))
	);
}

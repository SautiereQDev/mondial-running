module.exports = {
	apps: [
		{
			name: "mondial-running", // Nom de votre application
			script: "npm",
			args: "start",
			cwd: "/var/www/mondial-running", // Chemin vers votre application
			instances: "max", // Utilise tous les CPU disponibles
			exec_mode: "cluster", // Mode cluster pour meilleure performance
			env: {
				PORT: 3002, // Port sur lequel Next.js écoutera
				NODE_ENV: "production"
			}
		}
	]
};
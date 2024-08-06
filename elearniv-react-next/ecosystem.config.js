/*module.exports = {
	apps: [
		{
			name: "edemy",
			script: "npm",
				args: "run start",
    		instances: 1,
			exec_mode: "fork",
			autorestart: false,
			watch: false,
			max_memory_restart: "1G",
			env: {
				NODE_ENV: "production",
				PORT: 9991,
			},
		},
	],
};*/

module.exports = {
	apps: [
	  {
		name: "edemy",
		script: "npm",
		args: "run start",
		instances: 1,
		exec_mode: "fork",
		autorestart: true,
		watch: false,
		max_memory_restart: "2G",
		env: {
		  NODE_ENV: "production",
		  PORT: 9991,
		  NEXTAUTH_URL : "https://studygrove.sane.agency"
		}
	  },
	],
}; 
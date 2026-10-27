frappe.listview_settings["Customs Tariff Number"] = {
	formatters: {
		customs_duty_rate: function (value) {
			return `<span>${value}%</span>`;
		},
	},
};

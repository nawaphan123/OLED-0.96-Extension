({
    name: "OLED 0.96", // Category Name
    description: "Oled 0.96 I2C With Anyboard(default is esp32)",
    author: "Nawa Phansaen",
    category: "Display",
    version: "1.0.1",
    icon: "/static/icon.png", // Category icon
    color: "#4ca9e6", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: '<label text="For Setup OLED 0.96"></label>',
        },
        {
            xml: `
                <block type="oled_setup">
                    <value name="scl">
                        <shadow type="math_number">
                            <field name="NUM">22</field>
                        </shadow>
                    </value>
                    <value name="sda">
                        <shadow type="math_number">
                            <field name="NUM">21</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: '<label text="For Use After Setup"></label>',
        },
        {
            xml: `
                <block type="oled_print">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                        </shadow>
                    </value>
                    <value name="x">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="y">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "oled_clearData",
    ]
});

/**
 * Dynamic wheel
 * 
 * Github: https://github.com/inandi/wheel
 * Author: Gobinda Nandi [https://www.linkedin.com/in/inandi/]
 * 
 * Year 2022
 */

"use strict";

class Wheel {

    /**
     * constructor
     * 
     * @param  param 
     */
    constructor(param) {
        this._testParam = param;

    }

    run(){
        try {

        } catch (exceptionData) {
            console.log('Wheel is not loaded ' + exceptionData);
        }
    }

}

String.prototype.hashCode = function () {
    // See http://www.cse.yorku.ca/~oz/hash.html		
    var hash = 5381, i;
    let char;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash << 5) + hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};

Number.prototype.mod = function (n) {
    return ((this % n) + n) % n;
};

(function ($) {


    // Helpers
    var blackHex = '#333',
        whiteHex = '#fff',
        shuffle = function (o) {
            for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)
                ;
            return o;
        },
        halfPI = Math.PI / 2,
        doublePI = Math.PI * 2;

    

    // WHEEL!
    var wheel = {
        timerHandle: 0,
        timerDelay: 33,
        angleCurrent: 0,
        angleDelta: 0,
        size: 290,
        canvasContext: null,
        colors: [
            '#000000',
            '#0C090A',
            '#34282C',
            '#3B3131',
            '#3A3B3C',
            '#454545',
            '#413839',
            '#3D3C3A',
            '#463E3F',
            '#4C4646',
            '#504A4B',
            '#565051',
            '#52595D',
            '#5C5858',
            '#625D5D',
            '#666362',
            '#696969',
            '#686A6C',
            '#6D6968',
            '#726E6D',
            '#736F6E',
            '#757575',
            '#797979',
            '#837E7C',
            '#808080',
            '#848482',
            '#8D918D',
            '#A9A9A9',
            '#B6B6B4',
            '#C0C0C0',
            '#C9C0BB',
            '#D1D0CE',
            '#CECECE',
            '#D3D3D3',
            '#DCDCDC',
            '#E5E4E2',
            '#BCC6CC',
            '#98AFC7',
            '#838996',
            '#778899',
            '#708090',
            '#6D7B8D',
            '#657383',
            '#616D7E',
            '#646D7E',
            '#566D7E',
            '#737CA1',
            '#728FCE',
            '#4863A0',
            '#2B547E',
            '#36454F',
            '#29465B',
            '#2B3856',
            '#123456',
            '#151B54',
            '#191970',
            '#000080',
            '#151B8D',
            '#00008B',
            '#15317E',
            '#0000A0',
            '#0000A5',
            '#0020C2',
            '#0000CD',
            '#0041C2',
            '#2916F5',
            '#0000FF',
            '#0909FF',
            '#1F45FC',
            '#2554C7',
            '#1569C7',
            '#1974D2',
            '#2B60DE',
            '#4169E1',
            '#2B65EC',
            '#306EFF',
            '#157DEC',
            '#1589FF',
            '#1E90FF',
            '#368BC1',
            '#4682B4',
            '#488AC7',
            '#357EC7',
            '#3090C7',
            '#659EC7',
            '#87AFC7',
            '#95B9C7',
            '#6495ED',
            '#6698FF',
            '#56A5EC',
            '#38ACEC',
            '#00BFFF',
            '#3BB9FF',
            '#5CB3FF',
            '#79BAEC',
            '#82CAFF',
            '#87CEFA',
            '#87CEEB',
            '#A0CFEC',
            '#B7CEEC',
            '#B4CFEC',
            '#ADDFFF',
            '#C2DFFF',
            '#C6DEFF',
            '#BDEDFF',
            '#B0E0E6',
            '#AFDCEC',
            '#ADD8E6',
            '#B0CFDE',
            '#C9DFEC',
            '#D5D6EA',
            '#E3E4FA',
            '#E6E6FA',
            '#EBF4FA',
            '#F0F8FF',
            '#F8F8FF',
            '#F0FFFF',
            '#E0FFFF',
            '#CCFFFF',
            '#9AFEFF',
            '#7DFDFE',
            '#57FEFF',
            '#00FFFF',
            '#0AFFFF',
            '#50EBEC',
            '#4EE2EC',
            '#16E2F5',
            '#8EEBEC',
            '#AFEEEE',
            '#CFECEC',
            '#81D8D0',
            '#77BFC7',
            '#92C7C7',
            '#78C7C7',
            '#7BCCB5',
            '#66CDAA',
            '#AAF0D1',
            '#7FFFD4',
            '#93FFE8',
            '#40E0D0',
            '#48D1CC',
            '#48CCCD',
            '#46C7C7',
            '#43C6DB',
            '#00CED1',
            '#43BFC7',
            '#20B2AA',
            '#3EA99F',
            '#5F9EA0',
            '#3B9C9C',
            '#008B8B',
            '#008080',
            '#045F5F',
            '#033E3E',
            '#25383C',
            '#2C3539',
            '#3C565B',
            '#4C787E',
            '#5E7D7E',
            '#307D7E',
            '#348781',
            '#438D80',
            '#4E8975',
            '#306754',
            '#2E8B57',
            '#31906E',
            '#00A36C',
            '#34A56F',
            '#50C878',
            '#3EB489',
            '#3CB371',
            '#78866B',
            '#848B79',
            '#617C58',
            '#728C00',
            '#6B8E23',
            '#808000',
            '#556B2F',
            '#4B5320',
            '#667C26',
            '#4E9258',
            '#387C44',
            '#347235',
            '#347C2C',
            '#228B22',
            '#008000',
            '#006400',
            '#046307',
            '#254117',
            '#437C17',
            '#347C17',
            '#6AA121',
            '#4AA02C',
            '#41A317',
            '#12AD2B',
            '#3EA055',
            '#73A16C',
            '#6CBB3C',
            '#6CC417',
            '#4CC417',
            '#32CD32',
            '#52D017',
            '#4CC552',
            '#54C571',
            '#99C68E',
            '#8FBC8F',
            '#89C35C',
            '#85BB65',
            '#9CB071',
            '#B0BF1A',
            '#B2C248',
            '#9DC209',
            '#A1C935',
            '#9ACD32',
            '#77DD77',
            '#7FE817',
            '#59E817',
            '#57E964',
            '#16F529',
            '#5EFB6E',
            '#36F57F',
            '#00FF7F',
            '#00FA9A',
            '#5FFB17',
            '#00FF00',
            '#7CFC00',
            '#66FF00',
            '#7FFF00',
            '#87F717',
            '#98F516',
            '#B1FB17',
            '#ADFF2F',
            '#BDF516',
            '#DAEE01',
            '#E2F516',
            '#CCFB5D',
            '#BCE954',
            '#64E986',
            '#90EE90',
            '#6AFB92',
            '#98FB98',
            '#98FF98',
            '#B5EAAA',
            '#E3F9A6',
            '#C3FDB8',
            '#DBF9DB',
            '#F0FFF0',
            '#F5FFFA',
            '#FFFACD',
            '#FFFFC2',
            '#FFFFCC',
            '#FFFDD0',
            '#FAFAD2',
            '#FFFFE0',
            '#F5F5DC',
            '#FFF8DC',
            '#FBF6D9',
            '#F7E7CE',
            '#FAEBD7',
            '#FFEFD5',
            '#FFEBCD',
            '#FFE4C4',
            '#F5DEB3',
            '#FFE4B5',
            '#FFE5B4',
            '#FED8B1',
            '#FFDAB9',
            '#FFDEAD',
            '#FBE7A1',
            '#F3E3C3',
            '#F0E2B6',
            '#F1E5AC',
            '#F3E5AB',
            '#ECE5B6',
            '#E8E4C9',
            '#EEE8AA',
            '#F0E68C',
            '#EDDA74',
            '#EDE275',
            '#FFE87C',
            '#FFF380',
            '#FAF884',
            '#FFFF33',
            '#FFFF00',
            '#FFEF00',
            '#F5E216',
            '#FFDB58',
            '#FFDF00',
            '#F9DB24',
            '#FFD801',
            '#FFD700',
            '#FDD017',
            '#FFCE44',
            '#EAC117',
            '#F6BE00',
            '#F2BB66',
            '#FBB917',
            '#FBB117',
            '#FFAE42',
            '#FFA62F',
            '#FFA500',
            '#EE9A4D',
            '#F4A460',
            '#E2A76F',
            '#C19A6B',
            '#E6BF83',
            '#DEB887',
            '#D2B48C',
            '#C8AD7F',
            '#C2B280',
            '#BCB88A',
            '#C8B560',
            '#C9BE62',
            '#BDB76B',
            '#BAB86C',
            '#B5A642',
            '#C7A317',
            '#D4AF37',
            '#E9AB17',
            '#E8A317',
            '#DAA520',
            '#D4A017',
            '#C68E17',
            '#B8860B',
            '#C58917',
            '#CD853F',
            '#CD7F32',
            '#C88141',
            '#B87333',
            '#AA6C39',
            '#AB784E',
            '#966F33',
            '#806517',
            '#665D1E',
            '#8E7618',
            '#8B8000',
            '#827839',
            '#8A865D',
            '#AF9B60',
            '#827B60',
            '#786D5F',
            '#483C32',
            '#493D26',
            '#513B1C',
            '#3D3635',
            '#3B2F2F',
            '#43302E',
            '#49413F',
            '#5C3317',
            '#654321',
            '#704214',
            '#804A00',
            '#6F4E37',
            '#835C3B',
            '#7F5217',
            '#7F462C',
            '#A0522D',
            '#8B4513',
            '#8A4117',
            '#7E3817',
            '#7E3517',
            '#954535',
            '#C34A2C',
            '#C04000',
            '#C35817',
            '#B86500',
            '#B5651D',
            '#B76734',
            '#C36241',
            '#CB6D51',
            '#C47451',
            '#D2691E',
            '#CC6600',
            '#E56717',
            '#E66C2C',
            '#FF6700',
            '#FF5F1F',
            '#F87217',
            '#F88017',
            '#FF8C00',
            '#F87431',
            '#FF7722',
            '#E67451',
            '#FF8040',
            '#FF7F50',
            '#F88158',
            '#F9966B',
            '#FFA07A',
            '#E9967A',
            '#E78A61',
            '#DA8A67',
            '#FA8072',
            '#F08080',
            '#F67280',
            '#E77471',
            '#F75D59',
            '#E55451',
            '#CD5C5C',
            '#FF6347',
            '#E55B3C',
            '#FF4500',
            '#FF0000',
            '#FD1C03',
            '#FF2400',
            '#F62217',
            '#F70D1A',
            '#F62817',
            '#E42217',
            '#E41B17',
            '#DC381F',
            '#C24641',
            '#C11B17',
            '#B22222',
            '#B21807',
            '#A52A2A',
            '#A70D2A',
            '#9F000F',
            '#931314',
            '#990000',
            '#990012',
            '#8B0000',
            '#800000',
            '#8C001A',
            '#7E191B',
            '#800517',
            '#660000',
            '#551606',
            '#560319',
            '#3D0C02',
            '#3F000F',
            '#2B1B17',
            '#550A35',
            '#810541',
            '#7D0541',
            '#7D0552',
            '#872657',
            '#7E354D',
            '#7F4E52',
            '#7F525D',
            '#7F5A58',
            '#997070',
            '#B38481',
            '#BC8F8F',
            '#C5908E',
            '#C48793',
            '#C48189',
            '#E799A3',
            '#D58A94',
            '#E8ADAA',
            '#C4AEAD',
            '#ECC5C0',
            '#FFCBA4',
            '#F8B88B',
            '#EDC9AF',
            '#FFDDCA',
            '#FDD7E4',
            '#FFE6E8',
            '#FFE4E1',
            '#FFDFDD',
            '#FFCCCB',
            '#FBCFCD',
            '#FBBBB9',
            '#FFC0CB',
            '#FFB6C1',
            '#FAAFBE',
            '#FAAFBA',
            '#F9A7B0',
            '#FEA3AA',
            '#E7A1B0',
            '#E38AAE',
            '#F778A1',
            '#E56E94',
            '#DB7093',
            '#D16587',
            '#C25A7C',
            '#C25283',
            '#E75480',
            '#F660AB',
            '#FF69B4',
            '#FC6C85',
            '#F6358A',
            '#F52887',
            '#FF1493',
            '#F535AA',
            '#FD349C',
            '#E45E9D',
            '#E3319D',
            '#E4287C',
            '#E30B5D',
            '#DC143C',
            '#C32148',
            '#C21E56',
            '#C12869',
            '#C12267',
            '#CA226B',
            '#C71585',
            '#C12283',
            '#B3446C',
            '#B93B8F',
            '#DA70D6',
            '#DF73D4',
            '#EE82EE',
            '#F433FF',
            '#FF00FF',
            '#E238EC',
            '#D462FF',
            '#C45AEC',
            '#BA55D3',
            '#A74AC7',
            '#B048B5',
            '#D291BC',
            '#915F6D',
            '#7E587E',
            '#614051',
            '#583759',
            '#5E5A80',
            '#4E5180',
            '#6A5ACD',
            '#6960EC',
            '#736AFF',
            '#7B68EE',
            '#7575CF',
            '#6667AB',
            '#6F2DA8',
            '#6C2DC7',
            '#6A0DAD',
            '#5453A6',
            '#483D8B',
            '#4E387E',
            '#571B7E',
            '#4B0150',
            '#36013F',
            '#461B7E',
            '#4B0082',
            '#342D7E',
            '#663399',
            '#6A287E',
            '#8B008B',
            '#800080',
            '#86608E',
            '#9932CC',
            '#9400D3',
            '#8D38C9',
            '#A23BEC',
            '#B041FF',
            '#842DCE',
            '#8A2BE2',
            '#7A5DC7',
            '#7F38EC',
            '#9D00FF',
            '#8E35EF',
            '#893BFF',
            '#967BB6',
            '#9370DB',
            '#8467D7',
            '#9172EC',
            '#9E7BFF',
            '#CCCCFF',
            '#DCD0FF',
            '#E0B0FF',
            '#D891EF',
            '#B666D2',
            '#C38EC7',
            '#C8A2C8',
            '#DDA0DD',
            '#E6A9EC',
            '#F2A2E8',
            '#F9B7FF',
            '#C6AEC7',
            '#D2B9D3',
            '#D8BFD8',
            '#E9CFEC',
            '#FCDFFF',
            '#EBDDE2',
            '#E1D9D1',
            '#E9E4D4',
            '#EDE6D6',
            '#FAF0DD',
            '#F8F0E3',
            '#F8F6F0',
            '#FFF0F5',
            '#FDEEF4',
            '#FFF9E3',
            '#FDF5E6',
            '#FAF0E6',
            '#FFF5EE',
            '#FAF5EF',
            '#FFFAF0',
            '#FFFFF0',
            '#FFFFF7',
            '#F5F5F5',
            '#FBFBF9',
            '#FFFAFA',
            '#FEFCFF',
            '#FFFFFF',
        ],
        segments: [],
        seg_colors: [], // Cache of segments to colors
        maxSpeed: Math.PI / 16,
        upTime: 1000, // How long to spin up for (in ms)
        downTime: 5000, // How long to slow down for (in ms)
        spinStart: 0,
        frames: 0,
        centerX: 300,
        centerY: 300,
        spin: function () {
            // Start the wheel only if it's not already spinning
            if (wheel.timerHandle == 0) {
                wheel.spinStart = new Date().getTime();
                wheel.maxSpeed = Math.PI / (16 + Math.random()); // Randomly vary how hard the spin is
                wheel.frames = 0;
                // wheel.sound.play();
                wheel.timerHandle = setInterval(wheel.onTimerTick, wheel.timerDelay);
            }
        },

        onTimerTick: function () {
            var duration = (new Date().getTime() - wheel.spinStart),
                progress = 0,
                finished = false;

            wheel.frames++;
            wheel.draw();

            if (duration < wheel.upTime) {
                progress = duration / wheel.upTime;
                wheel.angleDelta = wheel.maxSpeed *
                    Math.sin(progress * halfPI);
            } else {
                progress = duration / wheel.downTime;
                wheel.angleDelta = wheel.maxSpeed *
                    Math.sin(progress * halfPI + halfPI);
                if (progress >= 1) {
                    finished = true;
                }
            }

            wheel.angleCurrent += wheel.angleDelta;
            while (wheel.angleCurrent >= doublePI) {
                // Keep the angle in a reasonable range
                wheel.angleCurrent -= doublePI;
            }
            if (finished) {
                clearInterval(wheel.timerHandle);
                wheel.timerHandle = 0;
                wheel.angleDelta = 0;

                if (console) {
                    console.log((wheel.frames / duration * 1000) + " FPS");
                }
            }

            // Display RPM
            var rpm = (wheel.angleDelta * (1000 / wheel.timerDelay) * 60) / (Math.PI * 2);
            $("#counter").html(Math.round(rpm) + " RPM");

        },

        init: function (optionList) {
            try {
                wheel.initWheel();
                // wheel.initAudio();
                wheel.initCanvas();
                wheel.draw();

                $.extend(wheel, optionList);

            } catch (exceptionData) {
                alert('Wheel is not loaded ' + exceptionData);
            }

        },

        // initAudio: function () {
        //     var sound = document.createElement('audio');
        //     console.log(sound);
        //     sound.setAttribute('src', 'wheel.mp3');
        //     wheel.sound = sound;
        // },

        initCanvas: function () {
            var canvas = $('#canvas')[0];
            canvas.addEventListener("click", wheel.spin, false);
            wheel.canvasContext = canvas.getContext("2d");
        },

        initWheel: function () {
            shuffle(wheel.colors);
        },

        // Called when segments have changed
        update: function () {
            // Ensure we start mid way on a item
            //var r = Math.floor(Math.random() * wheel.segments.length);
            var r = 0,
                segments = wheel.segments,
                len = segments.length,
                colors = wheel.colors,
                colorLen = colors.length,
                seg_color = [], // Generate a color cache (so we have consistant coloring)
                i
            wheel.angleCurrent = ((r + 0.5) / wheel.segments.length) * doublePI;

            for (i = 0; i < len; i++) {
                seg_color.push(colors[segments[i].hashCode().mod(colorLen)]);
            }
            wheel.seg_color = seg_color;

            wheel.draw();
        },

        draw: function () {
            wheel.clear();
            wheel.drawWheel();
            wheel.drawNeedle();
        },

        clear: function () {
            wheel.canvasContext.clearRect(0, 0, 1000, 800);
        },

        drawNeedle: function () {
            var ctx = wheel.canvasContext,
                centerX = wheel.centerX,
                centerY = wheel.centerY,
                size = wheel.size,
                i,
                centerSize = centerX + size,
                len = wheel.segments.length,
                winner;

            ctx.lineWidth = 2;
            ctx.strokeStyle = blackHex;
            ctx.fillStyle = whiteHex;

            ctx.beginPath();

            ctx.moveTo(centerSize - 10, centerY);
            ctx.lineTo(centerSize + 10, centerY - 10);
            ctx.lineTo(centerSize + 10, centerY + 10);
            ctx.closePath();

            ctx.stroke();
            ctx.fill();

            // Which segment is being pointed to?
            i = len - Math.floor((wheel.angleCurrent / doublePI) * len) - 1;

            // Now draw the winning name
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.fillStyle = blackHex;
            ctx.font = "2em Arial";
            winner = wheel.segments[i] || 'Choose at least 1 Venue';
            ctx.fillText(winner, centerSize + 20, centerY);
        },

        drawSegment: function (key, lastAngle, angle) {
            var ctx = wheel.canvasContext,
                centerX = wheel.centerX,
                centerY = wheel.centerY,
                size = wheel.size,
                colors = wheel.seg_color,
                value = wheel.segments[key];

            //ctx.save();
            ctx.beginPath();

            // Start in the centre
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, size, lastAngle, angle, false); // Draw an arc around the edge
            ctx.lineTo(centerX, centerY); // Now draw a line back to the centre

            // Clip anything that follows to this area
            //ctx.clip(); // It would be best to clip, but we can double performance without it
            ctx.closePath();

            ctx.fillStyle = colors[key];
            ctx.fill();
            ctx.stroke();

            // Now draw the text
            ctx.save(); // The save ensures this works on Android devices
            ctx.translate(centerX, centerY);
            ctx.rotate((lastAngle + angle) / 2);

            ctx.fillStyle = whiteHex;
            ctx.fillText(value.substr(0, 20), size - 15, 0);
            ctx.restore();
        },

        drawWheel: function () {
            var ctx = wheel.canvasContext,
                angleCurrent = wheel.angleCurrent,
                lastAngle = angleCurrent,
                len = wheel.segments.length,
                centerX = wheel.centerX,
                centerY = wheel.centerY,
                size = wheel.size,
                angle,
                i;

            ctx.lineWidth = 1;
            ctx.strokeStyle = blackHex;
            ctx.textBaseline = "middle";
            ctx.textAlign = "right";
            ctx.font = "1em Arial";

            for (i = 1; i <= len; i++) {
                angle = doublePI * (i / len) + angleCurrent;
                wheel.drawSegment(i - 1, lastAngle, angle);
                lastAngle = angle;
            }

            // Draw a center circle
            ctx.beginPath();
            ctx.arc(centerX, centerY, 20, 0, doublePI, false);
            ctx.closePath();

            ctx.fillStyle = whiteHex;
            //ctx.strokeStyle = blackHex;
            ctx.fill();
            ctx.stroke();

            // Draw outer circle
            ctx.beginPath();
            ctx.arc(centerX, centerY, size, 0, doublePI, false);
            ctx.closePath();

            ctx.lineWidth = 10;
            //ctx.strokeStyle = blackHex;
            ctx.stroke();
        }
    };

    $(function () {
        var $venues = $('#venues'),
            $venueName = $('#name'),
            // $venueType = $('#types'),
            // venueTypes = [],
            $list = $('<ul/>'),
            // $types = $('<ul/>'),
            $filterToggler = $('#filterToggle'),
            arrayUnique = function (a) {
                return a.reduce(function (p, c) {
                    if (p.indexOf(c) < 0) {
                        p.push(c);
                    }
                    return p;
                }, []);
            };

        $.each(venues, function (index, venue) {
            $list.append(
                $("<li/>")
                    .append(
                        $("<input />").attr({
                            id: 'venue-' + index,
                            name: venue.name,
                            value: venue.name,
                            type: 'checkbox',
                            checked: true
                        })
                            .change(function () {
                                var cbox = this,
                                    segments = wheel.segments,
                                    i = segments.indexOf(cbox.value);

                                if (cbox.checked && i === -1) {
                                    segments.push(cbox.value);
                                } else if (!cbox.checked && i !== -1) {
                                    segments.splice(i, 1);
                                }

                                segments.sort();
                                wheel.update();
                            })

                    ).append(
                        $('<label />').attr({
                            'for': 'venue-' + index
                        })
                            .text(venue.name)
                    )
            );
            // venueTypes.push(venue.type);
        });


        // $.each(arrayUnique(venueTypes), function (index, venue) {
        //     $types.append(
        //         $("<li/>")
        //             .append(
        //                 $("<input />").attr({
        //                     id: 'venue-type-' + index,
        //                     name: venue,
        //                     value: venue,
        //                     type: 'checkbox',
        //                     checked: true
        //                 })
        //                     .change(function () {
        //                         var $this = $(this),
        //                             i;
        //                         for (i = 0; i < venues.length; i++) {
        //                             if (venues[i].type === $this.val()) {
        //                                 $('[name="' + venues[i].name + '"]').prop("checked", $this.prop('checked')).trigger('change');
        //                             }
        //                         }
        //                     })

        //             ).append(
        //                 $('<label />').attr({
        //                     'for': 'venue-' + index
        //                 })
        //                     .text(venue)
        //             )
        //     )
        // });

        $venueName.append($list);
        // $venueType.append($types);
        // Uses the tinysort plugin, but our array is sorted for now.
        //$list.find('>li').tsort("input", {attr: "value"});

        wheel.init();

        $.each($venueName.find('ul input:checked'), function (key, cbox) {
            wheel.segments.push(cbox.value);
        });

        wheel.update();
        $venues.slideUp().data("open", false);
        $filterToggler.on("click", function () {
            if ($venues.data("open")) {
                $venues.slideUp().data("open", false);
            } else {
                $venues.slideDown().data("open", true);
            }
        });

        $('.checkAll').on("click", function () {
            $(this).parent().next('div').find('input').prop('checked', $(this).prop('checked')).trigger("change");
        });
    });
}(jQuery));
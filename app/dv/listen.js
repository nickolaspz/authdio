(function(){
    var a = args() || [];
    var e, l;
    function record() {
        const handleSuccess = function(stream) {
            const options = { mimeType: 'audio/webm' };
            const recordedChunks = [];
            const mediaRecorder = new MediaRecorder(stream, options);
            mediaRecorder.start();

            mediaRecorder.ondataavailable = function(e) {
                recordedChunks.push(e.data);

                var blob = new Blob(recordedChunks, {
                    type: 'audio/wav; codecs=0'
                });

                sendAudio(blob);
            }

            setTimeout(() => {
                mediaRecorder.stop();
            }, 6000);
        };

        function sendAudio(recorded) {
            var fd = new FormData();
            fd.append('account', a.account);
            fd.append('audio', recorded);

            $.ajax({
                url: '//localhost:8000/api/listen',
                method: 'post',
                data: fd,
                processData: false,
                contentType: false,
                success: (response) => {
                    render_response(response);
                },
                error: (error) => {
                    render_response(error);
                }
            });
        }

        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then(handleSuccess);
    }

    function render_response(response) {
        l.remove();
        e.innerHTML = 'Song name: ' + response.song_name + '<br>' + 'Confidence: ' + response.input_confidence;
    }

    function render() {
        e = document.getElementById(a.id);

        l = document.createElement('div');
        l.innerHTML = loader();

        b = document.createElement('button');
        b.innerHTML = 'record';
        b.addEventListener('click', function() {
            this.remove();
            e.appendChild(l);
        });
        b.addEventListener('click', record);

        e.appendChild(b);
    }

    function loader() {
        return '<svg class="lds-equalizer" width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="rotate(180 50 50)"><rect ng-attr-x="{{7.6923076923076925 - 12/2}}" y="36" ng-attr-width="{{12}}" height="24.0108" fill="#30b4e0" x="4.6923076923076925" width="6"> <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="10" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.5833333333333334s" dur="1.7"></animate></rect><rect ng-attr-x="{{15.384615384615385 - 12/2}}" y="36" ng-attr-width="12" height="28.4181" fill="#30b4e0" x="12.384615384615385" width="6"> <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="10" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.6666666666666666s" dur="1.5"></animate></rect><rect ng-attr-x="{{23.076923076923077 - 12/2}}" y="36" ng-attr-width="12" height="8.11305" fill="#30b4e0" x="20.076923076923077" width="6"> <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="10" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="0s" dur="2"></animate></rect><rect ng-attr-x="{{30.76923076923077 - 12/2}}" y="36" ng-attr-width="12" height="29.9656" fill="#30b4e0" x="27.76923076923077" width="6"> <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="10" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.75s" dur="1.45"></animate></rect><rect ng-attr-x="{{38.46153846153846 - 12/2}}" y="36" ng-attr-width="12" height="4.08943" fill="#30b4e0" x="35.46153846153846" width="6"> <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="10" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.08333333333333333s" dur="1"></animate></rect><rect ng-attr-x="{{46.15384615384615 - 12/2}}" y="36" ng-attr-width="12" height="10.4173" fill="#30b4e0" x="43.15384615384615" width="6"> <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="10" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.25s" dur="1"></animate></rect><rect ng-attr-x="{{53.84615384615385 - 12/2}}" y="36" ng-attr-width="12" height="19.945" fill="#30b4e0" x="50.84615384615385" width="6"> <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="10" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.4166666666666667s" dur="2"></animate></rect><rect ng-attr-x="{{61.53846153846154 - 12/2}}" y="36" ng-attr-width="12" height="28.3615" fill="#30b4e0" x="58.53846153846154" width="6"> <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="10" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.8333333333333334s" dur="1.2"></animate></rect><rect ng-attr-x="{{69.23076923076923 - 12/2}}" y="36" ng-attr-width="12" height="5.00829" fill="#30b4e0" x="66.23076923076923" width="6"> <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="10" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.16666666666666666s" dur="1.5"></animate></rect><rect ng-attr-x="{{76.92307692307692 - 12/2}}" y="36" ng-attr-width="12" height="20.6302" fill="#30b4e0" x="73.92307692307692" width="6"> <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="10" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.5s" dur="1"></animate></rect><rect ng-attr-x="{{84.61538461538461 - 12/2}}" y="36" ng-attr-width="12" height="17.4689" fill="#30b4e0" x="81.61538461538461" width="6"> <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="10" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.3333333333333333s" dur="1"></animate></rect><rect ng-attr-x="{{92.3076923076923 - 12/2}}" y="36" ng-attr-width="12" height="19.572" fill="#30b4e0" x="89.3076923076923" width="6"> <animate attributeName="height" calcMode="spline" values="20;30;4;20" times="0;0.33;0.66;1" ng-attr-dur="10" keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1" repeatCount="indefinite" begin="-0.9166666666666666s" dur="1.75"></animate></rect></g></svg>';
    }

    var s = 3;
    function checkAccount() {
        if (a.account && a.id) {
            render();
        } else if (s > 0) {
            s--;
            a = args || [];
            setTimeout(checkAccount, 1000);
        }
    }

    function args() {
        args = [];
        q = window.authdio.q || [];
        for (var i of q) {
            args[i[0]] = i[1];
        }

        return args;
    }

    checkAccount();
})(window, document);
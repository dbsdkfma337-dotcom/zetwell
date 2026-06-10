kakao.maps.load(function () {
    const container = document.getElementById("map");

    const options = {
        center: new kakao.maps.LatLng(37.469977, 126.885614),
        level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(37.469977, 126.885614),
    });

    marker.setMap(map);
});
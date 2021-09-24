	<script type="text/javascript">
    jQuery( document ).ready(function() {
        jQuery(document).on("change", "#bb-courses-directory-form [name='filter-categories-ld-tags']", function(e) {
            e.preventDefault(),
            window.BBLMS.fetchCourses()
        });
    });
	</script>

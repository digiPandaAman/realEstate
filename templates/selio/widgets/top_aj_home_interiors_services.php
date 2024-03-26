<?php if(isset($homeInteriorData) && $homeInteriorData): ?>
<div>
    <?php foreach($homeInteriorData as $hidData): ?>
        <div>
            Title = <?=$hidData->cdTitle;?>
            Slug = <?=$hidData->cdSlug;?>
            Description = <?=$hidData->cdDescription;?>
        </div>
    <?php endforeach; ?>
</div>
<?php endif; ?>